const { TodoListe } = require("./todo");


const TodoListe1 = new TodoListe("My List");
TodoListe1.add("new todo");
TodoListe1.add("new todo 2");
TodoListe1.add("new todo 3");
TodoListe1.markComplete("new todo 2")
TodoListe1.listTasks();
