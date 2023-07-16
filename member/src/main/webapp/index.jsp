<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>HOME</title>

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
	h1 {
		text-align: center;
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
	<h1>HOME</h1>
</body>
</html>