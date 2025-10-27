package com.example.StudentApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "*")
public class StudentController {
    
    @Autowired
    private StudentService studentService;

    @GetMapping("/by-user")
    public List<Student> getStudentsByUserEmail(@RequestParam String userEmail) {
        return studentService.getStudentsByUserEmail(userEmail);
    }

    @PostMapping
    public Student createStudent(@RequestBody Student student) {
        return studentService.saveStudent(student);
    }

    // (Optional) Old generic get-all for admins/testing
    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }
    
    // add/update/delete/migrate endpoints as in your original code
}
