import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;

import static org.testng.Assert.*;

public class LoginPageTest
{
    WebDriver driver;

    @BeforeSuite
    public void setUp(){
        WebDriverManager.chromedriver().setup();
    }

    @BeforeMethod()
    public void beforeMethod()
    {
        ChromeOptions options = new ChromeOptions();
        driver = new ChromeDriver(options);
        driver.navigate().to("http://localhost:3000/adminOffers");
    }

    @Test
    public void testLogin()
    {
        WebElement username = driver.findElement(By.xpath("//*[@id="email"]"));
        username.sendKeys("diego.koelpin@gmail.com");

        WebElement password = driver.findElement(By.xpath("//*[@id="password"]"));
        password.sendKeys("tesdt123");

        WebElement submit = driver.findElement(By.xpath("//*[@id="root"]/div[1]/div[1]/div[4]/div[2]/form/div[4]/button"));
        submit.click();
    }
}