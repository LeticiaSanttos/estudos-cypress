/// <references types="cypress" />

// it: Define um "caso de teste" individual.

// String: O primeiro parâmetro é a descrição do que está sendo testado (ex: 'Equality').

// Arrow Function (() => {}): É onde o código do teste realmente acontece.

//Aqui testamos valores primitivos (números, strings).
it('Equality', () => {
    const a = 1;

    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(1);
    expect('a').not.to.be.equal('b');

})

//Testa estados de variáveis.
it('Truthy', () =>{
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).to.be.not.null;
    //Verifica se a variável foi declarada mas não recebeu valor (como a variável let c;).
    expect(c).to.be.undefined;
})

//Testar objetos é diferente de testar números, pois objetos são comparados por referência na memória.
it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equal(obj);
    expect(obj).equals(obj);
    expect(obj).eq(obj);
    expect(obj).to.be.equal(obj);

    //Se você usasse apenas .equal, o teste falharia, mesmo os números sendo iguais. 
    // O deep avisa ao Cypress: "Olhe dentro do objeto e compare os valores de cada propriedade, 
    // não apenas o endereço de memória".
    expect(obj).to.be.deep.equal({a: 1, b: 2});
    expect(obj).eql({ a: 1, b: 2});

    //Verifica se o objeto contém pelo menos aquelas propriedades 
    // (ele pode ter mais coisas, mas tem que ter o a: 1).
    expect(obj).include({ a: 1});
    
    expect(obj).to.have.property('b');

    //Verifica especificamente se existe a chave 'b' com o valor 2.
    expect(obj).to.have.property('b', 2);
    expect(obj).to.not.be.empty;

    //Verifica se o objeto está vazio {} ou se um array está sem itens.
    expect({}).to.be.empty;
})

it('Arrays', () => {
    const arr = [1,2,3];

    //Este é o teste de igualdade exata de conjunto.
    // Ele verifica se o array possui exatamente esses membros.
    // Importante: A ordem padrão não importa para o .members, mas a quantidade e os valores sim. 
    // Se o array fosse [1, 2], esse teste falharia.
    expect(arr).to.have.members([1,2,3]);

    //Este é o teste de subconjunto.
    // Ele verifica se o array contém, pelo menos, os itens que você listou.
    // Como seu array original é [1, 2, 3], ele "inclui" o 1 e o 2 com sucesso.
    expect(arr).to.include.members([1,3]);

    //Validam se o array tem comprimento (length) maior que zero ou igual a zero.
    expect(arr).to.not.be.empty;
    expect([]).to.be.empty;
})

//Verifica o tipo das variáveis
it('Types', () => {
    const num = 1;
    const str = 'Texto';

    expect(num).to.be.a('number');
    expect(str).to.be.a('string');
    expect({}).to.be.an('object');
    expect([]).to.be.an('array');
})

it('String', () => {
    const str = 'String de teste';

    expect(str).to.be.equals('String de teste');
    expect(str).to.have.length(15);
    expect(str).to.contains('de');
    expect(str).to.match(/de/);
    expect(str).to.match(/String/);
    //usa regex e valida que a variavel começa com "String"
    expect(str).to.match(/^String/);
    //usa regex e valida que a variavel termina com "teste"
    expect(str).to.match(/teste$/);

    //verifica o tamanho igual a 15
    expect(str).to.match(/.{15}/);

    //verifica que existe apenas letras
    expect(str).to.match(/\w+/);

    //verifica que não existe números
    expect(str).to.match(/\D+/);

})

it('Number', () => {
    const number = 4;
    const floatNumber = 5.1235;

    expect(number).to.be.equal(4);

    //verifica que o número é acima de 3
    expect(number).to.be.above(3);

    //verifica que o número é abaixo de 7
    expect(number).to.be.below(7);

    //usado para fazer comparações com números flutuantes sem precisar passar todas casas decimais
    expect(floatNumber).to.be.closeTo(5.2, 0.1);
})