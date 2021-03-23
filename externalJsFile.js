module.exports = (emitter) => {
    console.log('============ TRIGGERED =============')
    emitter.emit('order.created', {name: 'name1', description: 'description1'});
}