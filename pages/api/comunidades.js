import { SiteClient } from 'datocms-client'

export default async function recebeRequests(req, res) {
    if (req.method === 'POST') {
        const token = 'ea7b940f6719365d45c600974aa4ac'
        const client = new SiteClient(token)

        const record = await client.items.create({
            itemType: "973327",
            title: "Teste",
            imageUrl: "https://github.com/omariosouto.png",
            creatorSlug: 'omario'
        })

        res.json({
            dados: "Dado",
            record: record
        })
        return
    }

    res.status(404).json({
        message: "Erro"
    })
}