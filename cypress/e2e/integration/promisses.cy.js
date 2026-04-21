it('Sem teste', () => {})

const getSomething = callback => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            console.log('respondendo...')
            resolve(13);
        },1000)
    })
    
};

// const system = () =>{
//     console.log('init');
//     const prom = getSomething();
//     prom.then(some => {
//         console.log(`Something is ${some}`)
//     })
//         console.log('end');
    
// };

const system = async () => {
    console.log('init');
    const some = await getSomething()
    console.log(`Something is ${some}`)
    console.log('end')
}

system();