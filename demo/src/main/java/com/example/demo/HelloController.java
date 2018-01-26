package com.example.demo;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller 
public class HelloController {
	@Autowired
	private UserList userlist;
    @RequestMapping(value="/log",method=RequestMethod.GET)
    public String helloworld(){  
        return "login";  
    }
    @RequestMapping(value="/logs",method=RequestMethod.GET)
    public String logup() {
    	return "logup";
    }
    @RequestMapping(value="/register",method=RequestMethod.POST)
    public String register(HttpServletRequest request) {
    	String username=request.getParameter("username");
    	String password=request.getParameter("password");
    	String email=request.getParameter("email");
    	String userphone=request.getParameter("userphone");
    	System.out.println(username+password+email+userphone);
    	User user=new User();
    	user.setUsername(username);
    	user.setPassword(password);
    	user.setUserphone(userphone);
    	user.setEmail(email);
        userlist.save(user);

    	return "write";
    }
}
