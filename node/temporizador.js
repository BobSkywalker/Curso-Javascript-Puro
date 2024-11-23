// Codigo Bugado

const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 9 * * 7', function(){
    console.log('Testando o Shedule', new Date().getSeconds())
})


setTimeout(() => {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000);

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0, 7)]
regra.hour = 9
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
     console.log('Executando Tarefa 2!', new Date().getSeconds())
})