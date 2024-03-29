package com.example.server.ticketing.messages

import com.example.server.DuplicateException
import com.example.server.NotFoundException


interface MessageService {
    fun getAllForTicket(ticketId: Long): List<Message>

    @Throws(NotFoundException::class)
    fun getById(ticketId: Long, messageId: Long): Message

    @Throws(DuplicateException::class)
    fun addMessage(messageDTO: MessageDTO, ticketId: Long): Message
}