const rl = require('readline')

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

const promptPromise = {
    question: (pergunta) => new Promise((resolve, reject) => {
        try {
            prompt.question((pergunta), (resposta) => resolve(resposta))
        }
        catch (error) {
            reject(error)
        }
    }),
    close: () => prompt.close()
}

// prompt.question("Qual seu número favorito? \nR: ", (resposta) => {
//     console.log(`O dobro do seu número favorito é: ${parseInt(resposta)*2}`)
    
//     prompt.question("Qual sua cor favorita? \nR: ", (resposta) => {
//         console.log(`Sua cor favorita é: ${resposta}`)
//         prompt.close()
//     })
// })

async function askuser() {
    const numero = await promptPromise.question("Qual seu número favorito? \nR: ")
    console.log(`O dobro do seu número favorito é: ${parseInt(numero)*2}`)
    
    const cor = await promptPromise.question("Qual sua cor favorita? \nR: ")
    console.log(`A sua cor favorita é: ${cor}`)

    promptPromise.close()
}

askuser()