let times = 0;

const syncDB = () => {
    times++;
    console.log('UwU cada 6 segundos: cambio', times);

    return times;
};

module.exports = {
  syncDB
}
