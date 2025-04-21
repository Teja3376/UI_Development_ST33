package IBM;

class Main1{
    // public static char highestFrequencyCharacter(String str){
    //     int[] freq = new int[256];
    //     int max = 0;
    //     int maxChar = 0;
    //     for(int i = 0; i < str.length(); i++){
    //         freq[str.charAt(i)]++;
    //         if(freq[str.charAt(i)] > max){
    //             max = freq[str.charAt(i)];
    //             maxChar = str.charAt(i);
    //         }
    //     }
    //     return (char)maxChar;
    // }
    public static char highestFrequencyCharacter(String str){
        int []freq = new int [256];
        for (char c : str.toCharArray()) {
            freq[c]++;
        }
        char result = '\0';
        int max = 0;
        for(char c : str.toCharArray()){
            if(freq[c]>max||(freq[c]==max && c<result)){
                max = freq[c];
                result = c ;
            }            
        }
        return result;
    }
    public static void main(String[] args){
        System.out.println(highestFrequencyCharacter("aabbbcccc"));
    }
}



class Main2{
    public static String decimalToBinary(int n){
        String binary = "";
        if (n == 0 || n == 1) {
            return String.valueOf(n);  
        }
        while(n > 0){
            binary = (n % 2) + binary;
            n /= 2;
        }
        return binary; 
    }
    public static void main(String[] args){
        System.out.println(decimalToBinary(5));
    }
}