package com.example.server.products


import com.example.server.DuplicateException
import com.example.server.NotFoundException
interface ProductService {
    fun getAll(): List<ProductDTO>

    @Throws(NotFoundException::class)
    fun getById(ean: String): ProductDTO

    @Throws(NotFoundException::class)
    fun getByIdP(ean: String): Product

    @Throws(DuplicateException::class)
    fun addProduct(productDTO: ProductDTO): ProductDTO
}