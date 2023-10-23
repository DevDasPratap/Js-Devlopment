const Ticket = require("../models/ticket");

class Lottery {
    constructor() {
        this.tickets = []
    }
    /**
     * Create and set new ticket
     * @param {string} username 
     * @param {number} price 
     */
    create(username, price) {
        const ticket = new Ticket(username, price)
        this.tickets.push(ticket)
        return ticket
    }
    /**
     * 
     * @param {string} username 
     * @param {number} price 
     * @param {number} quantity
     * @returns {Array<Ticket>} 
     */
    bulkCreate(username, price, quantity) {
        const result = []
        for (let i = 0; i < quantity; i++) {
            const ticket = this.create(username, price)
            result.push(ticket)
        }
        return result
    }
    find() {
        return this.tickets
    }
    /**
     * 
     * @param {string} ticketId 
     */
    findById(ticketId) {
        const ticket = this.tickets.find((ticket) => ticket.id === ticketId)
        return ticket
    }
    /**
     * 
     * @param {string} username 
     */
    findByUsername(username) {
        const tickets = this.tickets.filter((ticket) => ticket.username === username)
        return tickets
    }
    /**
     * 
     * @param {number} ticketId 
     * @param {string} username 
     */
    updateById(ticketId, ticketBody) {
        const ticket = this.findById(ticketId)
        ticket.username = ticketBody.price ?? ticket.price
        ticket.updatedAt = new Date()

        return ticket
    }
    deleteById(ticketId) {
        const index = this.tickets.findIndex((ticket) => ticket.id === ticketId)
        if (index !== -1) {
            this.tickets.splice(index, 1)
            return true
        } else {
            return false
        }
    }
    draw(winnerCount) {
        let winnerIndexes = new Array(winnerCount)
        let index = 0
        while (index < winnerCount) {
            let winnerIndex = Math.floor(Math.random()* this.tickets.length)
            if (!winnerIndexes.includes(winnerIndex)) {
                winnerIndexes[index++] = winnerIndex
                continue
            }
        }
    }
}

const lottery = new Lottery()
module.exports = lottery