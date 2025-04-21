package DSA;

public class NumberPattern {
    int n = 5;
    public void pattern() {
        for(int i = 1 ; i<=n ; i++){
            for(int j = 1 ; j<=i ; j++){
                System.out.print(j);
            }
            System.out.println();
        }
    }
    public static void main(String[] args) {
        NumberPattern np = new NumberPattern();
        np.pattern();
    }
}
