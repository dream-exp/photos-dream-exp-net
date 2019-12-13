import sys

args = sys.argv

for i in range(int(args[2]), int(args[3])):
    # print("![](/images/" + args[1] + "_" + str(i) + ".jpg)")
    print("{{< img \"/images/" + args[1] + "_" + str(i) + ".jpg\" >}}")
