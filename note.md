# Onde é usada a fórmula de Bhaskara e o que ela resolve

- A fórmula de Bhaskara é usada para resolver equações quadráticas, que são equações polinomiais de segundo grau. Ela é amplamente utilizada em várias áreas da matemática, física, engenharia e ciências aplicadas. Equações quadráticas são comuns em problemas relacionados a movimento de corpos sob ação da gravidade, óptica, acústica, eletrônica, entre outras áreas. A fórmula de Bhaskara permite encontrar as raízes (ou soluções) de uma equação quadrática, que são os valores de x que tornam a equação verdadeira.


# Exemplo real na física onde é usada a fórmula de Bhaskara

- Um exemplo real na física onde a fórmula de Bhaskara é aplicada é na determinação do alcance máximo de um projétil lançado com uma certa velocidade inicial a um ângulo específico.

- Suponha que estamos lidando com o lançamento de um objeto em um plano inclinado, sem considerar a resistência do ar. As equações do movimento horizontal e vertical do objeto podem ser modeladas como equações quadráticas. Para determinar o alcance máximo, podemos configurar a equação da trajetória vertical do projétil, definindo a altura máxima como o ponto em que a velocidade vertical se torna zero. Usando a fórmula de Bhaskara para resolver essa equação, podemos encontrar o tempo necessário para atingir a altura máxima.

- Após encontrar o tempo necessário para atingir a altura máxima, podemos usar esse tempo na equação horizontal do movimento para determinar a distância horizontal percorrida pelo projétil, que é o alcance máximo.

- Assim, a fórmula de Bhaskara é essencial para resolver o problema do alcance máximo de um projétil em um lançamento oblíquo na ausência de resistência do ar.

# O que mais pode interferir no tempo do projétil em seu lançamento?

- Além da velocidade inicial e do ângulo de lançamento, há outros fatores que podem interferir no tempo de voo de um projétil em seu lançamento. Alguns desses fatores incluem:

 1. Gravidade: A gravidade afeta a trajetória do projétil, acelerando-o na direção vertical e influenciando sua altura máxima e alcance horizontal.
 2. Resistência do ar: Em situações do mundo real, a resistência do ar exerce uma força oposta ao movimento do projétil, o que pode reduzir sua velocidade e modificar sua trajetória. Isso pode afetar tanto o tempo de voo quanto o alcance do projétil.
 3. Altitude e densidade do ar: A densidade do ar e a altitude afetam a resistência do ar. Em altitudes elevadas ou em locais com menor densidade do ar, a resistência do ar é menor, o que pode resultar em um tempo de voo maior e em um alcance maior para o projétil.
 4. Forças externas: Em certas situações, podem existir outras forças externas atuando sobre o projétil, como forças magnéticas ou elétricas em sistemas eletromagnéticos, que podem modificar sua trajetória e tempo de voo.

# Exemplo de uso

- Vamos considerar um exemplo simplificado de um projétil lançado horizontalmente de uma plataforma elevada, sem resistência do ar significativa, onde queremos calcular o tempo de voo.

- Suponha que temos um projétil que é lançado horizontalmente a uma velocidade inicial de 20 m/s a partir de uma altura de 40 metros acima do solo. Vamos calcular o tempo de voo até que o projétil atinja o solo.

## Dados:
 - Velocidade inicial horizontal (v₀x) = 20 m/s
 - Altura inicial (h) = 40 metros
 - Aceleração devido à gravidade (g) = 9.81 m/s² (aproximadamente)
 
## Resultado:
 - O tempo de voo do projétil é aproximadamente 2.86 segundos antes de atingir o solo.
 
## Distância percorrida
  - Se o tempo de voo do projétil é de aproximadamente 2.86 segundos e sua velocidade horizontal é de 20 m/s, podemos determinar a distância percorrida usando a equação:
    - Distância = Velocidade x Tempo
  Onde:
    1. A velocidade é a velocidade horizontal constante do projétil (20 m/s).
    2. O tempo é o tempo de voo calculado anteriormente (2.86 segundos).

## Resultado:
  - Distância = 20m/s x 2.86s
  - Distância = 57.2 metros

  - O projétil percorreu aproximadamente 57.2 metros antes de atingir o solo.



Preciso de um código em JS para calcular o tempo de voo de um projétil, a sua distância percorrida e também o máximo de altura que o projétil alcançou. Nesse sistema terá as seguintes informações:

- O projétil sempre será lançado do chão <OK>
- Será informado a quantos graus o projétil será lançado <OK>
- Será informado a velocidade do projétil em m/s <OK>
- Será informado a gravidade <OK>
- Será informado a velocidade do vento em km/h
- Será informado o peso do projétil

O sistema deverá fazer todo esse cálculo e me devolver o tempo de voo em segundo e a distância percorrida em metros. E preciso também de um array com as informações da altura que o projétil estava em determinado segundo e determinada distância em que o projétil é lançado, até o momento que o mesmo atinge o solo