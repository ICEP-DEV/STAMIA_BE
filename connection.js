// Connections class

import java.sql.*;
  
public class connection{
 

Connection con = null;
 
public static Connection connectDB()
{
    try
    {
        Class.forName("com.stemia.jdbc.Driver");
 
        
        Connection con = DriverManager.getConnection(
            "jdbc:stemia://localhost:3306/stemia",
            "root", " ");
        return con;
    }
 
    
    catch (SQLException | ClassNotFoundException e)
    {
        System.out.println(e);
        return null;
    }
}
}