// Descrizione:
// Rifare l’esercizio della to do list:
// - stampare in pagina un item per ogni elemento contenuto in un array V
// - ogni item ha una “x” associata: cliccando su di essa, l’item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
var app = new Vue(
    {
        el: "#myapp",
        data: {
            tasks: [
                {
                    text: 'Avviare lezione in classe',
                    done: 'true'
                },
                {
                    text: 'Pranzare',
                    done: 'true'
                },
                {
                    text: 'Fare sercizio assegnato',
                    done: 'false'
                },
                {
                    text:'Andare a lavorare',
                    done: 'true'
                },
                {
                    text: 'cenare',
                    done: 'false'
                },
                {
                    text: 'dormire',
                    done: 'true'
                }
            ]
        },
        methods: {
            removeTask(index){
                this.tasks.splice(index,1)
            }
        }

    }
)