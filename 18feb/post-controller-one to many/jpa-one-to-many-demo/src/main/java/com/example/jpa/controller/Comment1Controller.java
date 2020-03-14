package com.example.jpa.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.jpa.exception.ResourceNotFoundException;
import com.example.jpa.model.Comment;
import com.example.jpa.model.Comment1;
import com.example.jpa.repository.Comment1Repository;
import com.example.jpa.repository.PostRepository;

@RestController
public class Comment1Controller {

    @Autowired
    private Comment1Repository comment1Repository;

    @Autowired
    private PostRepository postRepository;
    
    @PostMapping("/posts/{postId}/comments1")
    public Comment1 createComment(@PathVariable (value = "postId") Long postId,
                                 @Valid @RequestBody Comment1 comment1) {
        return postRepository.findById(postId).map(post -> {
            comment1.setPost(post);
            return comment1Repository.save(comment1);
        }).orElseThrow(() -> new ResourceNotFoundException("PostId " + postId + " not found"));
    }
   


}
