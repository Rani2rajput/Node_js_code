n=int(input("enter num:"))
x=0
y=1
i=0
while n>0:
    x=y
    y=i
    i=x+y
    print(i)