package com.example.student.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.student.model.Student;
import com.example.student.repository.StudentRepository;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repo;

    public List<Student> getAllStudents() {
        return repo.findAll();
    }

    public Student addStudent(Student student) {
        return repo.save(student);
    }

    public Student updateStudent(Long id, Student updatedStudent) {
        Student student = repo.findById(id).orElse(null);

        if (student != null) {
            student.setName(updatedStudent.getName());
            student.setEmail(updatedStudent.getEmail());
            student.setCourse(updatedStudent.getCourse());
            return repo.save(student);
        }
        return null;
    }

    public void deleteStudent(Long id) {
        repo.deleteById(id);
    }
}