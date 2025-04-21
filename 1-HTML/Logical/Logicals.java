package Logical;

import java.util.Arrays;
import java.util.Scanner;

class Stars {
public static void main(String[] args) {
    for(int i = 0; i<=1; i++){
        for(int j = 0; j<i; j++){
            System.out.print("*");
        }
        System.out.println("");
    }
}
}
class Substring {
    public static void main(String[] args) {
        String name, sub;
        int i, j, length;
        Scanner in = new Scanner(System.in);
        System.out.println("Enter name");
        name = in.nextLine();
        length = name.length();
        for (i = 0; i < length; i++) {
            for (j = 1; j <= length - i; j++) {
                sub = name.substring(i, i + j);
                System.out.println(sub);
            }
        }
    }
}

class multiplilMatrix {
    public static void main(String[] args) {
        int m, n, p, q, sum = 0, c, d, k;

        Scanner in = new Scanner(System.in);
        System.out.println("Enter the number of rows and columns of first matrix");
        m = in.nextInt();
        n = in.nextInt();

        int first[][] = new int[m][n];

        System.out.println("Enter the elements of first matrix");

        for (c = 0; c < m; c++)
            for (d = 0; d < n; d++)
                first[c][d] = in.nextInt();

        System.out.println("Enter the number of rows and columns of second matrix");
        p = in.nextInt();
        q = in.nextInt();
        if (n != p) {
            System.out.println("Matrices can't be multiplied!");
            return;
        } else {
            int second[][] = new int[p][q];
            System.out.println("Enter the elements of second matrix");
            for (c = 0; c < p; c++)
                for (d = 0; d < q; d++)
                    second[c][d] = in.nextInt();

            for (c = 0; c < m; c++) {
                for (d = 0; d < q; d++) {
                    for (k = 0; k < p; k++) {
                        sum = sum + first[c][k] * second[k][d];
                    }
                    System.out.print(sum + " ");
                    sum = 0;
                }
                System.out.println();

            }

        }
    }
}

class TransposeMatrix {
    public static void main(String[] args) {
        int m, n, c, d;
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the number of rows and columns of matrix");
        m = in.nextInt();
        n = in.nextInt();
        int matrix[][] = new int[m][n];
        System.out.println("Enter the elements of matrix");
        for (c = 0; c < m; c++)
            for (d = 0; d < n; d++)
                matrix[c][d] = in.nextInt();
        for (c = 0; c < m; c++) {
            for (d = 0; d < n; d++)
                System.out.print(matrix[c][d] + " ");

            System.out.println();
        }
        System.out.println("Transpose of the matrix is:");
        for (c = 0; c < n; c++) {
            for (d = 0; d < m; d++)
                System.out.print(matrix[d][c] + " ");
            System.out.println();
        }

    }
}

class StringMethods {
    public static void main(String[] args) {
        String str = "Java Programming", replace, concat;
        System.out.println("Original string: " + str);
        // Get the length of the string
        int length = str.length();
        System.out.println("Length of the string: " + length);
        // Replace a character
        replace = str.replace("Java", "Spring Boot");
        System.out.println("After replacing 'Java' with 'Spring Boot': " + replace);
        // Concatenate two strings
        concat = str.concat(" Hello forks");
        System.out.println("After concatenating 'Hello forks': " + concat);

    }
}

class BinarySort {
    public static void main(String[] args) {
        int n, i;
        Scanner in = new Scanner(System.in);
        System.out.println("Enter the number of elements: ");
        n = in.nextInt();
        int arr[] = new int[n];
        System.out.println("Enter the elements: ");
        for (i = 0; i < n; i++)
            arr[i] = in.nextInt();
        System.out.println("Before sorting: ");
        for (i = 0; i < n; i++)
            System.out.print(arr[i] + " ");
        System.out.println();
        System.out.println("After sorting: ");
        Arrays.sort(arr);
        for (i = 0; i < n; i++)
            System.out.print(arr[i] + " ");
        System.out.println();
        System.out.println("Enter the value to be searched: ");
        int search = in.nextInt();
        int first = 0;
        int last = n - 1;
        int middle = (first + last) / 2;
        while (first <= last) {
            if (arr[middle] < search) {
                first = middle + 1;
                // System.out.println(first);
            } else if (arr[middle] == search) {
                System.out.println("Element found at index: " + middle);
                break;
            } else {
                last = middle - 1;
                // System.out.println(last);
            }
            middle = (first + last) / 2;
            // System.out.println(middle);
        }
        if (first > last) {
            System.out.println("Element is not present in array");
        }

    }
}