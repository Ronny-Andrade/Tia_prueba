from cmath import e
import csv

Score = []
UserID = []
Product = []
Profile = []
Helpfuness = []

with open("D:/Proyectos/Tia/LecturaMovies/movies/F.txt",encoding='utf-8') as txt:
    datafile = txt.readlines()
    for line in datafile:
        if 'product/productId' in line:
            pro = line[line.index(' '):line.index('\n')]
            Product.append(pro)

        if 'review/userId' in line:
            re = line[line.index(' '):line.index('\n')]
            UserID.append(re)

        if 'review/profileName' in line:
            profi = line[line.index(' '):line.index('\n')]
            Profile.append(profi)

        if 'review/helpfulness' in line:
            hel = line[line.index(' '):line.index('\n')]
            Helpfuness.append(hel)

        if 'review/score' in line:
            sco = line[line.index(' '):line.index('\n')]
            Score.append(sco)


contador = 0


myFile = open("moviesFactible.csv","w")
with myFile:
    header = ['ProductID','UserID','ProfileName','Helpfuness','Score']
    writer = csv.DictWriter(myFile,fieldnames=header)
    writer.writeheader()
    for c in Product:
        writer.writerow(
            {'ProductID':Product[contador],
             'UserID':UserID[contador],
             'ProfileName':Profile[contador],
             'Helpfuness':Helpfuness[contador],
             'Score':Score[contador]})
        contador = contador+1
        


print('Writing complete')  












