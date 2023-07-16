<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import = "member.UserDAO" %>
<% request.setCharacterEncoding("UTF-8"); %>

<jsp:useBean id="UserDTO" class="member.UserDTO" scope="page"/>
<jsp:setProperty name="UserDTO" property="userId"/>
<jsp:setProperty name="UserDTO" property="userPw"/>
<jsp:setProperty name="UserDTO" property="userName"/>
<jsp:setProperty name="UserDTO" property="userHp"/>
<jsp:setProperty name="UserDTO" property="userEmail"/>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입</title>

<style type="text/css">
	#header {
	  width: 100%;
	  height:50px;
	  background:#59c;
	}
	#header .container {
	  width: 100%;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	}
	#header .container .left {

	}
	#header .container .left a{
		font-size: 20px;
		color: #c00;
	}
	#header .container .right {

	}
	#header .container .right a{
		font-size: 20px;
		color: #c00;
	}
	
	#signUp {
	  width: 100%;
	}
	#signUp .container {
	  width: 100%;
	  max-width: 1400px;
	  margin: 0 auto;
	}
	#signUp .container .gap {
	  width: 100%;
	  padding: 100px 0;
	}
	#signUp .container .gap .title {
	  max-width: 420px;
	  margin: 0 auto;
	  padding: 85px 20px 45px 20px;
	  text-align: center;
	}
	#signUp .container .gap .title h1 {
	  font-size: 42px;
	  font-weight: 700;
	  letter-spacing: -1px;
	  color: #222;
	  line-height: normal;
	}
	#signUp .container .gap .content {
	  width: 100%;
	  min-width: 280px;
	  padding: 0 20px;
	}
	#signUp .container .gap .content form {
	  width: 610px;
	  padding: 0 20px;
	  margin: 0 auto 55px auto;
	}
	#signUp .container .gap .content form table {
	  width: 100%;
	  padding: 0 0 15px 0;
	}
	#signUp .container .gap .content form table tbody {
	  width: 100%;
	}
	#signUp .container .gap .content form table tbody tr {
	  width: 100%;
	}
	#signUp .container .gap .content form table tbody tr td {
	  width: 100%;
	  padding: 5px 0;
	}
	#signUp .container .gap .content form table tbody tr td h4 {
	  display: inline-block;
	  width: 100px;
	  color: #000;
	  font-size: 15px;
	  margin: 10px 0;
	  line-height: 18px;
	  vertical-align: top;
	}
	#signUp .container .gap .content form table tbody tr td h4::after {
	  content: "*";
	  width: 11px;
	  height: 6px;
	  display: inline-block;
	  font-size: 12px;
	  line-height: 6px;
	  color: #898989;
	  text-align: right;
	}
	#signUp .container .gap .content form table tbody tr td input {
	  width: 480px;
	  height: 38px;
	  line-height: 28px;
	  padding: 30px 2px 30px 15px;
	  font-size: 16px;
	  background: #f7f7f7;
	  border: 0;
	  color: #353535;
	  outline: none;
	}
	#signUp .container .gap .content form .button-box {
	  width: 100%;
	  margin: 30px 0 0 0;
	  padding: 15px 0;
	}
	#signUp .container .gap .content form .button-box button {
	  width: 100%;
	  font-size: 17px;
	  padding: 15px;
	  letter-spacing: -0.9px;
	  font-weight: 600;
	  color: #fff;
	  background: #1a1a1a;
	  border: 1px solid #1a1a1a;
	  line-height: 18px;
	  text-align: center;
	  cursor: pointer;
	  transition: all 0.5s;
	}
	#signUp .container .gap .content form .button-box button:hover {
	  opacity: 0.7;
	}
</style>

</head>
<body>
<%
	String userId = null;
	if(session.getAttribute("userId")!=null){
		userId = (String)session.getAttribute("userId");
	}
%>
	<header id='header'>
		<div class='container'>
			<div class='left'>
				<a href='./index.jsp'>HOME</a>
			<%
				if(userId==null){
			%>
				<a href='./signIn.jsp'>로그인</a>
				<a href='./signUp.jsp'>회원가입</a>
			</div>
			<div class='right'>
			<%
				}
				else{
			%>
				<a href='./update.jsp'>회원정보수정</a>
				<a href='./logoutAction.jsp'>로그아웃</a>
			<%
				}
			%>
			</div>
		</div>
	</header>
	
	<div id='signUp'>
	    <div class="container">
	        <div class="gap">
	            <div class="title">
	                <h1>회원가입</h1>
	            </div>
	            <div class="content">
	                <form name='signUpForm' id='signUpForm' method='post' action="./signUpAction.jsp">
	                    <table>
	                        <tbody>
	                            <tr>
	                                <td>
	                                    <h4>아이디</h4>
	                                    <input minLength={4} maxLength={16} type="text" name='userId' id='userId'/>
	                                </td>
	                            </tr>
	                            <tr>
	                                <td>
	                                    <h4>비밀번호</h4>
	                                    <input minLength={10} maxLength={16} type="text" name='userPw' id='userPw'/>
	                                </td>
	                            </tr>
	                            <tr>
	                                <td>
	                                    <h4>이름</h4>
	                                    <input maxLength={30} type="text" name='userName' id='userName'/>
	                                </td>
	                            </tr>
	                            <tr>
	                                <td>
	                                    <h4>휴대전화</h4>
	                                    <input maxLength={11} type="text" name='userHp' id='userHp'/>
	                                </td>
	                            </tr>
	                            <tr>
	                                <td>
	                                    <h4>이메일</h4>
	                                    <input maxLength={250} type="text" name='userEmail' id='userEmail'/>
	                                </td>
	                            </tr>
	                        </tbody>
	                    </table>
	                    <div class="button-box">
	                        <button type='submit'>회원가입</button>
	                    </div>
	                </form>
	            </div>
	        </div>
	    </div>
	</div>
</body>
</html>