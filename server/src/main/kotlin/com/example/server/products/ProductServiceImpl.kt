package com.example.server.products

import com.example.server.DuplicateException
import com.example.server.NotFoundException
import jakarta.transaction.Transactional
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

@Service
@Transactional
class ProductServiceImpl(private val productRepository: ProductRepository) : ProductService {
    override fun getAll(): List<ProductDTO> {
        return productRepository.findAll().map { it.toDTO() }
    }

    override fun getById(ean: String): ProductDTO {
        return productRepository.findByIdOrNull(ean)?.toDTO() ?: throw NotFoundException("Product not found")
    }

    override fun getByIdP(ean: String): Product {
        return productRepository.findByIdOrNull(ean) ?: throw NotFoundException("Product not found")

    }

    override fun addProduct(productDTO: ProductDTO): ProductDTO {
        if (productRepository.findByIdOrNull(productDTO.ean) != null) throw DuplicateException("Product already exist")
        return productRepository.save(
            productDTO.fromDTO()
        ).toDTO()
    }
}