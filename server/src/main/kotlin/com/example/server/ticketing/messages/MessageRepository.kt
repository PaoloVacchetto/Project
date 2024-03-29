package com.example.server.ticketing.messages

import com.example.server.ticketing.tickets.Ticket
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface MessageRepository : JpaRepository<Message, Long?> {
    @Query("select m from Message m where m.ticket = :ticket")
    fun findMessagesByTicket(ticket: Ticket): List<Message>

    @Query("select m from Message m where m.id = :id and m.ticket = :ticket")
    fun findMessageByIdAndTicket(id: Long, ticket: Ticket): Message?
}