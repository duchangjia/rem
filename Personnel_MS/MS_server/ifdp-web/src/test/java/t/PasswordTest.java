package t;

import org.junit.Test; 
import org.springframework.security.authentication.encoding.Md5PasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


public class PasswordTest {
	
    public static void main(String[] args) {
        Md5PasswordEncoder encoder = new Md5PasswordEncoder();
        String password = encoder.encodePassword("123123", "junwing");
        System.out.println("password = " + password);

        boolean valid = encoder.isPasswordValid(password, "123123", "junwing");
        System.out.println("valid = " + valid);

        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        String encoded = bCryptPasswordEncoder.encode("123123");
        System.out.println("encoded = " + encoded);

        boolean matches = bCryptPasswordEncoder.matches("123123", "$2a$10$qtwPcLNjo0rLyisXTramL.43IWhbir7EcMgYvm6MbJtuT2PzAqHJ.");
        System.out.println("matches = " + matches);
    }
}
