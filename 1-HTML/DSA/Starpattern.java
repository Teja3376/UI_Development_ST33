package DSA;

public class Starpattern {
    int n = 5;
    public void printStars() {
        for(int i = 0; i < n; i++) {
            for(int j = 0; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
    public static void main(String[] args) {
        Starpattern starPattern = new Starpattern();
        starPattern.printStars();
    }
}
