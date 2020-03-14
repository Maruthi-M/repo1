package com.example.jpa.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.jpa.model.Comment1;

@Repository
public interface Comment1Repository extends JpaRepository<Comment1, Long>{
	Page<Comment1> findByPostId(Long postId, Pageable pageable);
    Optional<Comment1> findByIdAndPostId(Long id, Long postId);

}
