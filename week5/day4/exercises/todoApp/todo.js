class TodoListe {
    constructor(listName) {
        this.tasks = [];
        this.listName = listName

    }

    add(taskName) {
        this.tasks.push({ name: taskName, isComplete: false })
    }
    markComplete(name) {
        // const index = this.tasks.findIndex(task => task.name === name)
        // this.tasks[index] = { name: name, isComplete: true }


        const newTasks = this.tasks.map((task) => {
            if (task.name === name) {
                return { name: name, isComplete: true }
            }
            return task
        })

        this.tasks = newTasks

    }
    listTasks() {
        console.log(this.listName)
        console.log(this.tasks)
    }
}

module.exports = { TodoListe };