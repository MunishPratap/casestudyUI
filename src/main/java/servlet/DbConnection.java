package servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class DbConnection extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String sourceType = request.getParameter("sourceType");
		String targetType = request.getParameter("targetType");
		String sourceDb = request.getParameter("sourceDbName");
		String targetDb = request.getParameter("targetDbName");
		String sourceUser = request.getParameter("sourceUser");
		String targetUser = request.getParameter("targetUser");
		String sourceTable = request.getParameter("sourceTable");
		String targetTable = request.getParameter("targetTable");
		String sourcePassword = request.getParameter("sourceTable");
		String targetPassword = request.getParameter("targetPassword");
		
		String result = "Connection established with source and target datasources.";
		
		
		response.getWriter().write("<table style='width:100%'>" + 
				"    <tr>" + 
				"        <td><b>Source Type</b></td>" + 
				"        <td>"+sourceType+"</td>" + 
				"        <td><b>Target Type</b></td>" + 
				"        <td>"+targetType+"</td>" + 
				"    </tr>" + 
				"    <tr>" + 
				"        <td><b>Source Database</b></td>" + 
				"        <td>"+sourceDb+"</td>" + 
				"        <td><b>Target Database</b></td>" + 
				"        <td>"+targetDb+"</td>" + 
				"    </tr>" + 
				"    <tr>" + 
				"        <td><b>Source User</b></td>" + 
				"        <td>"+sourceUser+"</td>" + 
				"        <td><b>Target User</b></td>" + 
				"        <td>"+targetUser+"</td>" + 
				"    </tr>" + 
				"    <tr>" + 
				"        <td><b>Source Table</b></td>\r\n" + 
				"        <td>"+sourceTable+"</td>" + 
				"        <td><b>Target Table</b></td>\r\n" + 
				"        <td>"+targetTable+"</td>" + 
				"    </tr>" + 
				"</table>"+
				"<h3>"+result+"</h3>");
	}

}
