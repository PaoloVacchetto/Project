package com.example.server.profiles

import com.example.server.DuplicateException
import com.example.server.NotFoundException


interface ProfileService {
    @Throws(NotFoundException::class)
    fun getByEmail(email: String): ProfileDTO

    @Throws(NotFoundException::class)
    fun getByEmailP(email: String): Profile

    @Throws(DuplicateException::class)
    fun addProfile(profileDTO: ProfileDTO): ProfileDTO

    @Throws(NotFoundException::class)
    fun editProfile(profileDTO: ProfileDTO, email: String): ProfileDTO
}