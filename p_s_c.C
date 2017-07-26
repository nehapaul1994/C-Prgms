#include<stdio.h>
#include<conio.h>
int main(){
	FILE *fp;
	char c;
	fp=fopen(__FILE__,"r");/** __FILE__ is Standard Predefined Macros in C Programming.
This macro will expand to the name of current file path.**/

	do{
		c=getc(fp);
		putchar(c);
	}

	while(c!=EOF);
	fclose(fp);
	getch();
}
