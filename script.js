const todo = {

    action(e) {
      const target = e.target;
      const action = target.closest('.todo__action')
      const elemItem = target.closest('.todo__item');
      const checkbox = target.closest('.todo_checkbox')
      if(target.classList.contains('todo_checkbox')) {
        checkbox.toggleAttribute("checked")
        this.save();
      }
      if (target === action) {
        elemItem.setAttribute("disabled","");
        elemItem.style.display = 'none';
        elemItem.remove();
        this.save();
        }
      if (target.classList.contains('todo__add')) {
        this.add();
        this.save();
      }
    },


    add() {
      const elemText = document.querySelector('.todo__text');
      document.querySelector('.todo__items').insertAdjacentHTML('beforeend', this.create(elemText.value));
      elemText.value = '';
      return;
    },


    create(text) {
      return `<li class="todo__item">
        <span class="todo__task">${text}</span>
        <span class="todo__action todo__action_delete" data-todo-action="deleted"></span>
        <input type="checkbox" class="todo_checkbox" data-todo-action="checked"></span></li>`;
    },


    init() {
      const fromStorage = localStorage.getItem('todo');
      if (fromStorage) {
        document.querySelector('.todo__items').innerHTML = fromStorage;
      }
      document.addEventListener('click', this.action.bind(this));
    },

    save() {
      
      localStorage.setItem('todo', document.querySelector('.todo__items').innerHTML);
    }
  };
  
  todo.init();
  //window.localStorage.clear()
 
