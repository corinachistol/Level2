import items from '../Items.mjs'

//option for get all items
const getItemsOps = {
    schema:{
        response:{
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        id: {type:'string'},
                        name: {type:'string'},
                    }
                }
            }
        }
    }
}

async function itemRoutes (fastify,options, done) {

    await fastify.register(import('./routes/items'))
    //get all items
    fastify.get('/items', getItemsOps, async (req,reply) => {
        return items
    })
    
    
    //get single item
    fastify.get('/items/:id', async (req,reply) => 
    {
        //console.log(req.params) // { id: ':1' }
        const { id } = req.params
       
    
        const item = items.find( (item) =>  item.id === id )
        return item
    })

    done()
}

export default itemRoutes