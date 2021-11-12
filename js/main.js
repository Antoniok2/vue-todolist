// Descrizione:
// Rifare l’esercizio della to do list:
// - stampare in pagina un item per ogni elemento contenuto in un array V
// - ogni item ha una “x” associata: cliccando su di essa, l’item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
var app = new Vue(
    {
        el: "#myapp",
        data: {
            newTask: {
                text: "",
                done: false
            },
            tasks: [
                {
                    text: 'Avviare lezione in classe',
                    done: false
                },
                {
                    text: 'Pranzare',
                    done: false
                },
                {
                    text: 'Fare sercizio assegnato',
                    done: false
                },
                {
                    text:'Andare a lavorare',
                    done: false
                },
                {
                    text: 'cenare',
                    done: false
                },
                {
                    text: 'dormire',
                    done: false
                }
            ]
        },
        methods: {
            removeTask(index){
                this.tasks.splice(index,1)
            },
            addTask(){
                this.tasks.push(this.newTask);
                this.newTask = {
                    text: "",
                    done: "false"
                }
            },
            addClass(){
                if(this.tasks.done === false) {
                    this.tasks.done = true
                }
            }
            
            
        },

    }
)