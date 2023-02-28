import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;

import java.util.ArrayList;
import java.util.List;

import static org.testng.Assert.*;

public class HomePageTest
{
    WebDriver driver;

    @BeforeSuite
    public void setUp(){
        WebDriverManager.chromedriver().setup();
    }

    @BeforeMethod()
    public void beforeMethod()
    {
        driver = new ChromeDriver();
        driver.navigate().to("http://localhost:3000");
    }

    /*@AfterMethod
    public void close()
    {
        driver.quit();
    }*/

    @Test
    public void testBrojStavkiPoStrani() //Provera da li je select box lepo napravljen. PROVERENO
    {
        driver.findElement(By.xpath("//*[@id=\"root\"]/div[2]/div/div[2]/a")).click();
        Select s = new Select(driver.findElement(By.xpath("//*[@id=\"root\"]/div[3]/div[2]/div[3]/select")));
        List<WebElement> ponude = s.getOptions();
        int size = ponude.size();

        assertEquals(size, 4); //Prvo da proverimo da li imamo 4 opcije uopste inace ne vredi proveravati nastavak ako ovo nije zadovoljeno.
        String[] izborPonudaPoStrani = {"50", "25", "100", "200"};
        for(int i=0; i<size; i++)
        {
            String option = ponude.get(i).getText();
            assertEquals(option, izborPonudaPoStrani[i]); //Proveriti da li se u dropdown meniju redom nalaze vrednosti 50,25,100,200.
        }
    }

    @Test
    public void testPodrazumevanogBrojaStavkiPoStrani() //Provera da li je defaultno selektovano 50 stavki po strani. PROVERENO
    {
        driver.findElement(By.xpath("//*[@id=\"root\"]/div[2]/div/div[2]/a")).click();
        WebElement podrazumevanaVrednost = driver.findElement(By.xpath("//*[@id=\"root\"]/div[3]/div[2]/div[3]/select"));
        Select s = new Select(podrazumevanaVrednost);

        assertEquals(s.getFirstSelectedOption().getText(),"50"); //Podrazumevana vrednost treba da nam bude 50.
    }

    @Test
    public void testDaLiImaBrojStavkiPoStrani25() //Provera da li izbor broja stavki po strani radi za 25. Nemam podatke
    {
        driver.findElement(By.xpath("//*[@id=\"root\"]/div[2]/div/div[2]/a")).click();
        Select s = new Select(driver.findElement(By.xpath("//*[@id=\"root\"]/div[3]/div[2]/div[3]/select")));
        s.selectByValue("25"); //provera za 25
        driver.findElement(By.xpath("Xpath za dugme koje primenjuje filter.")).click(); // Obrisati ako se automatski primenjuje

        List<WebElement> rows25 = driver.findElements(By.xpath("Xpath do diva gde su pojedinacne ponude")); // Smestamo sve ponude koje su izlistane na strani.
        //assertEquals(25, rows25.size()); //Provera da li na strani ima izlistanih 25 ponuda
        assertTrue(rows25.size() <= 25); //Provera da je na strani izlistano maksimum 25 ponuda jer ih mozda u bazi nema vise al je bitno da ne bude vise od 25.
    }
    @Test
    public void testDaLiImaBrojStavkiPoStrani50() //Provera da li izbor broja stavki po strani radi za 50. Nemam podatke
    {
        driver.findElement(By.xpath("//*[@id=\"root\"]/div[2]/div/div[2]/a")).click();
        Select s = new Select(driver.findElement(By.xpath("//*[@id=\"root\"]/div[3]/div[2]/div[3]/select")));
        s.selectByValue("50"); //provera za 50
        driver.findElement(By.xpath("Xpath za dugme koje primenjuje filter.")).click(); // Obrisati ako se automatski primenjuje

        List<WebElement> rows50 = driver.findElements(By.xpath("Xpath do diva gde su pojedinacne ponude")); // Smestamo sve ponude koje su izlistane na strani.
        //assertEquals(50, rows50.size()); //Provera da li na strani ima izlistanih 50 ponuda
        assertTrue(rows50.size() <= 50); //Provera da je na strani izlistano maksimum 50 ponuda jer ih mozda u bazi nema vise al je bitno da ne bude vise od 25.
    }
    @Test
    public void testDaLiImaBrojStavkiPoStrani100() //Provera da li izbor broja stavki po strani radi za 100. Nemam podatke
    {
        driver.findElement(By.xpath("//*[@id=\"root\"]/div[2]/div/div[2]/a")).click();
        Select s = new Select(driver.findElement(By.xpath("//*[@id=\"root\"]/div[3]/div[2]/div[3]/select")));
        s.selectByValue("100"); //provera za 100
        driver.findElement(By.xpath("Xpath za dugme koje primenjuje filter.")).click(); // Obrisati ako se automatski primenjuje

        List<WebElement> rows100 = driver.findElements(By.xpath("Xpath do diva gde su pojedinacne ponude")); // Smestamo sve ponude koje su izlistane na strani.
        //assertEquals(100, rows100.size()); //Provera da li na strani ima izlistanih 100 ponuda
        assertTrue(rows100.size() <= 100); //Provera da je na strani izlistano maksimum 100 ponuda jer ih mozda u bazi nema vise al je bitno da ne bude vise od 25.
    }
    @Test
    public void testDaLiImaBrojStavkiPoStrani200() //Provera da li izbor broja stavki po strani radi za 200. Nemam podatke
    {
        driver.findElement(By.xpath("//*[@id=\"root\"]/div[2]/div/div[2]/a")).click();
        Select s = new Select(driver.findElement(By.xpath("//*[@id=\"root\"]/div[3]/div[2]/div[3]/select")));
        s.selectByValue("200"); //provera za 200
        driver.findElement(By.xpath("Xpath za dugme koje primenjuje filter.")).click(); // Obrisati ako se automatski primenjuje

        List<WebElement> rows200 = driver.findElements(By.xpath("Xpath do diva gde su pojedinacne ponude")); // Smestamo sve ponude koje su izlistane na strani.
        //assertEquals(200, rows200.size()); //Provera da li na strani ima izlistanih 200 ponuda
        assertTrue(rows200.size() <= 200); //Provera da je na strani izlistano maksimum 200 ponuda jer ih mozda u bazi nema vise al je bitno da ne bude vise od 25.
    }

    @Test
    public void testPojedinacnePonude() //Provera da li pojedinacna ponuda sadrzi sve sto je potrebno. Nemam podatke
    {
        driver.findElement(By.xpath("/html/body/div/div[1]/div[2]/div[4]/div")).click();
        
            WebElement naziv = rows.get(i).findElement(By.xpath("/html/body/div/div[1]/div[3]/div[2]/div/div[2]/div/h1"));
            WebElement destinacija = rows.get(i).findElement(By.xpath("/html/body/div/div[1]/div[3]/div[2]/div/div[2]/div/p[3]"));
            WebElement slika = rows.get(i).findElement(By.xpath("/html/body/div/div[1]/div[3]/div[2]/div/div[1]/div/img"));
            WebElement terminPutovanja = rows.get(i).findElement(By.xpath("/html/body/div/div[1]/div[3]/div[2]/div/div[2]/div/p[4]"));
            WebElement cena = rows.get(i).findElement(By.xpath("/html/body/div/div[1]/div[3]/div[2]/div/div[2]/div/p[10]"));
            WebElement tipPrevoza = rows.get(i).findElement(By.xpath("/html/body/div/div[1]/div[3]/div[2]/div/div[2]/div/p[5]"));

            // Provera da li postoje sve ove stavke, samo ako sve postoje test prolazi.
            assertNotNull(naziv);
            assertNotNull(destinacija);
            assertNotNull(slika);
            assertNotNull(terminPutovanja);
            assertNotNull(cena);
            assertNotNull(tipPrevoza);
        
    }

    @Test
    public void testPretragePoGradu() //Provera da li radi pretraga po gradu. Nemam podatke
    {
        WebElement grad = driver.findElement(By.xpath("/html/body/div/div[1]/div[2]/div[1]/div/form/div[3]/div/input"));
        grad.sendKeys("Istanbul"); // Pre ovoga treba napraviti posebnu ponudu za bas taj grad kako bi proverili da li ga pronalazi.
        WebElement filter = driver.findElement(By.xpath("/html/body/div/div[1]/div[2]"));
        filter.click(); // Posle ovoga bi trebalo da ostane samo taj jedan aranzman koji smo trazili.

        List<WebElement> rows = driver.findElements(By.xpath("/html/body/div/div[1]/div[2]/div[3]/div")); // Smestamo sve ponude koje su izlistane na strani.
        for(int i=0; i<rows.size(); i++) // Za svaku ponudu koja postoji na stranici proveravamo da li naziv sadrzi poslati deo naziva.
        {
            WebElement gradPonude = rows.get(i).findElement(By.xpath("/html/body/div/div[1]/div[2]/div[3]/div/div[3]/h1"));
            assertEquals(gradPonude.getText().toLowerCase(), "Istanbul"); // Poredimo da li je drzava pronadjene ponude jednaka zadatoj drzavi.
        }
    }

    @Test
    public void testPretragePoDrzavi() //Provera da li radi pretraga po drzavi. Nemam podatke
    {
        WebElement drzava = driver.findElement(By.xpath("/html/body/div/div[1]/div[2]/div[1]/div/form/div[2]/div/input"));
        drzava.sendKeys("Spain"); // Pre ovoga treba napraviti posebnu ponudu za bas tu drzavu kako bi proverili da li ga pronalazi.
        WebElement filter = driver.findElement(By.xpath("/html/body/div/div[1]/div[2]"));
        filter.click(); // Posle ovoga bi trebalo da ostane samo taj jedan aranzman koji smo trazili.

        List<WebElement> rows = driver.findElements(By.xpath("/html/body/div/div[1]/div[2]/div[3]/div")); // Smestamo sve ponude koje su izlistane na strani.
        for(int i=0; i<rows.size(); i++) // Za svaku ponudu koja postoji na stranici proveravamo da li naziv sadrzi poslati deo naziva.
        {
            WebElement drzavaPonude = rows.get(i).findElement(By.xpath("/html/body/div/div[1]/div[2]/div[3]/div/div[3]/div/h2"));
            assertEquals(drzavaPonude.getText().toLowerCase(), "SPAIN"); // Poredimo da li je drzava pronadjene ponude jednaka zadatoj drzavi.
        }
    }

    @Test
    public void testPretragePoTipuPrevoza() //Provera da li radi pretraga po tipu prevoza za avion. Nemam podatke
    {

        WebElement transport = driver.findElement(By.xpath("/html/body/div/div[1]/div[2]/div[1]/div/form/div[4]")); //Staviti XPath od naseg select boxa.
        transport.sendKeys("bus"); //provera za Avion

        WebElement filter = driver.findElement(By.xpath("/html/body/div/div[1]/div[2]"));
        filter.click(); // Posle ovoga bi trebalo da ostane samo taj jedan aranzman koji smo trazili.

        List<WebElement> rows = driver.findElements(By.xpath("/html/body/div/div[1]/div[2]/div[3]/div")); // Smestamo sve ponude koje su izlistane na strani.
        for(int i=0; i<rows.size(); i++) // Za svaku ponudu koja postoji na stranici proveravamo da li naziv sadrzi poslati deo naziva.
        {
            WebElement filter2 = driver.findElement(By.xpath("/html/body/div/div[1]/div[2]/div[3]/div"));
            filter2.click(); // Posle ovoga bi trebalo da ostane samo taj jedan aranzman koji smo trazili.
            WebElement tipPrevozaPonude = rows.get(i).findElement(By.xpath("/html/body/div/div[1]/div[3]/div[2]/div/div[2]/div/p[5]"));
            assertEquals(tipPrevozaPonude.getText().toLowerCase(), "bus"); // Poredimo da li je tip prevoza pronadjene ponude jednak zadatom tipu prevoza.
        }
    }

}