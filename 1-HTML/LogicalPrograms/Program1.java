package LogicalPrograms;

public class Program1 {
    public static String reverseString(String str) {
        StringBuilder sb = new StringBuilder(str);
        int [] char = sb.charAt();
        
    }
    public static void main(String[] args) {
        System.out.println(reverseString("null"));
    }
}

class Solution {
    public static void nStarTriangle(int n) {
        for (int row = 0; row < n; row++) { 
           
            for (int sp = 0; sp < n - row - 1; sp++) {
                System.out.print(" ");
            }
            
            for (int star = 0; star <= row; star++) {
                System.out.print("* ");
            }
            
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int n = 5; // Number of rows for the triangle
        nStarTriangle(n);
    }
}