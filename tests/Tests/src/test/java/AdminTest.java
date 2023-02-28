import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.WebDriver.Options;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

import static org.testng.Assert.*;

public class AdminTest
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
        options.setBinary("/home/abc/Downloads/chromedriver");
        System.setProperty("webdriver.chrome.driver", "/home/abc/Downloads/chromedriver");
        driver = new ChromeDriver(options);
        driver.navigate().to("http://localhost:3000/adminOffers");
    }

    /*@AfterMethod
    public void close()
    {
        driver.quit();
    }*/

    @Test
    public void testDodajAranzman() //Provera da li radi dodavanje aranzmana. PROVERENO?
    {
        //Aranzman
        WebElement naziv = driver.findElement(By.xpath("/html/body/div/div[1]/div[3]/div[2]/form/div[1]/input"));
        naziv.sendKeys("NazivAranzmana");

        WebElement cena = driver.findElement(By.xpath("/html/body/div/div[1]/div[3]/div[2]/form/div[12]/input"));
        cena.clear();
        cena.sendKeys("100");

        WebElement tipPrevoza =driver.findElement(By.xpath("/html/body/div/div[1]/div[3]/div[2]/form/div[5]/input"));
        tipPrevoza.selectByValue("Avion");

        // WebElement komentar = driver.findElement(By.xpath("//*[@id=\"root\"]/div[2]/div[2]/div/div/div/div/form/div[2]/textarea"));
        // komentar.sendKeys("No comment");

        //Smestaj
        WebElement nazivSmestaj = driver.findElement(By.xpath("/html/body/div/div[1]/div[3]/div[2]/form/div[9]/input");
        nazivSmestaj.sendKeys("NazivSmestaj");

        WebElement kategorija = driver.findElement(By.xpath("/html/body/div/div[1]/div[3]/div[2]/form/div[8]/input"));
        kategorija.sendKeys("bungalow");

        WebElement tipSmestaja = driver.findElement(By.xpath("/html/body/div/div[1]/div[3]/div[2]/form/div[10]/input"));
        tipSmestaja.sendKeys("bungalow");

        WebElement internet = driver.findElement(By.xpath("/html/body/div/div[1]/div[3]/div[2]/form/div[15]/input"));
        internet.sendKeys("1");
        WebElement tv = driver.findElement(By.xpath("/html/body/div/div[1]/div[3]/div[2]/form/div[13]/input"));
        tv.sendKeys("1");
        WebElement klima = driver.findElement(By.xpath("/html/body/div/div[1]/div[3]/div[2]/form/div[14]/input"));
        klima.sendKeys("1");
        WebElement frizider = driver.findElement(By.xpath("/html/body/div/div[1]/div[3]/div[2]/form/div[16]/input"));
        frizider.sendKeys("1");

        //Unesi sliku x7 mozda?!

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(3)); //wait ako ima potrebe
        WebElement dodajSmestaj = driver.findElement(By.xpath("/html/body/div/div[2]/div[2]/div/div/div/div/form/div[3]/div[2]/div/button"));
        dodajSmestaj.sendKeys("\n"); //Klik na Unesi smestaj - tu koliko znam treba da se izabere tek posle toga smestaj
        //dodajSmestaj.click();

        //Program

        WebElement pocetniDatum = driver.findElement(By.xpath("/html/body/div/div[1]/div[3]/div[2]/form/div[6]/input"));
        pocetniDatum.sendKeys("02-02-2023");

        WebElement kranjiDatum = driver.findElement(By.xpath("/html/body/div/div[1]/div[3]/div[2]/form/div[7]/input"));
        kranjiDatum.sendKeys("05-02-2023");

        WebElement gradProgram = driver.findElement(By.xpath("/html/body/div/div[1]/div[3]/div[2]/form/div[3]/input"));
        gradProgram.sendKeys("GradProgram");

        WebElement drzavaProgram = driver.findElement(By.xpath("/html/body/div/div[1]/div[3]/div[2]/form/div[2]/input"));
        drzavaProgram.sendKeys("DrzavaProgram");

        WebElement kontinentProgram = new Select(driver.findElement(By.xpath("/html/body/div/div[1]/div[3]/div[2]/form/div[4]/input")));
        kontinentProgram.sendKeys("Evropa");

        //Umesto .click() na svakom dugmetu koristimo .sendKeys("\n") da ne bi koristili skrol na stranici

        WebElement dodajAranzman = driver.findElement(By.xpath("/html/body/div/div[1]/div[3]/div[2]/form/div[18]/button"));
        dodajAranzman.sendKeys("\n");

        //Posle bi trebalo izlistati sve ponude i pronaci bas ovu specificnu ponudu kako bi proverili da je ubacena na pravi nacin.
    }

    @Test
    public void brisanjeAranzmana()
    {
        //Uraditi...
    }

    @Test
    public void azuriranjeAranzmana()
    {
        //Uraditi...
    }
}