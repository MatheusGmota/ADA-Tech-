const dns = require("node:dns")


// dns.resolve4(searchedUrl, (err, adresses) => {
//     if (err) {
//         console.error('url não encontrada')
//         return
//     }
    
//     console.log(adresses)
// })

async function bootstrap() {

    const searchedUrl = "google.com"
    
    console.time('pesquisando por DNS padrão')
    const adresses = await dns.promises.resolve4(searchedUrl)
    console.log(adresses);
    console.timeEnd('pesquisando por DNS padrão')

    const nameServers = await dns.promises.resolveNs(searchedUrl)
    console.log(nameServers);
    
    const ipNs = await dns.promises.resolve4(nameServers[1])

    const resolver = new dns.Resolver()
    resolver.setServers(ipNs)

    console.time('pesquisando por DNS específico')
    const adressesWithResolver = resolver.resolve4(searchedUrl, (err, adresses) => {
        if (err) {
            console.error('url não encontrada')
            return
        }
        console.timeEnd('pesquisando por DNS específico')
    
        console.log(adresses)    
    })
}

bootstrap()