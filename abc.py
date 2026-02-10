# n = int(input("Enter rows : "))
# stars = "* "*n
# stars = stars.strip()
# print(stars)
# for i in range(2,n):
#     line= "* "
#     for j in range(2,n):
#         line = line + str(j) + " "
#     line = line+"* "
#     print(line)
# if(n != 1): print(stars)

# b= lambda a: a*a
# print(b(4))


class A : 
    _a = "Hello"
    __d = "doom" 
    c = "hi"

class B(A) : 
    def dei(a,b):
        print(a)
        print(b)
        print(super().c)
        print(super()._a)

m = B()
# print(A.__d)
m.dei(3)
