const leaves = document.getElementById('leaves');
const trunk = document.getElementById('trunk');
const roots = document.getElementById('roots');
const info = document.getElementById('info');
const infoText = document.getElementById('info-text');
const backButton = document.getElementById('back-button');
const tree = document.getElementById('tree');

leaves.addEventListener('mouseover', () => {
    leaves.style.opacity = '0.7';
});

leaves.addEventListener('mouseout', () => {
    leaves.style.opacity = '1';
});

leaves.addEventListener('click', () => {
    showInfo('Las consecuencias inmediatas de este embargo fueron un aumento significativo en el precio del petróleo, que pasó de 3 a 12 dólares por barril. Este incremento provocó una gran inflación global, aumentando los costos de producción y reduciendo el empleo, ya que las empresas recortaron personal para equilibrar sus costos. una inflación global significativa y un aumento de los costos de producción, lo que llevó a las empresas a reducir su personal y a una recesión económica en varios países. Frente a esta situación, los altos costos de mantener el Estado de Bienestar se volvieron insostenibles. Los gobiernos tuvieron que recortar el gasto social y los programas de bienestar debido a la presión económica. Esto debilitó el enfoque keynesiano, que dependía de la intervención estatal y el gasto público para estimular la economía y mantener el pleno empleo. El fracaso del keynesianismo para manejar la crisis económica provocada por el aumento del precio del petróleo llevó a un cambio hacia el monetarismo. La necesidad de controlar la inflación y estabilizar las economías afectadas llevó a la adopción de políticas monetaristas, que abogaban por una menor intervención estatal y un control estricto de la oferta monetaria. El toyotismo es un sistema de organización productiva desarrollado por Toyota en la década de 1950. Se basa en que la fabricación comience con pedidos específicos. Los insumos y la producción se planifican para entregar productos terminados según demanda y en tiempos definidos. Este método elimina mercaderías y capital inmovilizado, optimizando la eficiencia y reduciendo costos. Además, promueve trabajadores polivalentes que realizan diversas tareas, como diagnóstico, producción, reparación, mantenimiento y control de calidad, lo cual permite adaptarse rápidamente a cambios y tecnologías nuevas.');
});

trunk.addEventListener('mouseover', () => {
    trunk.style.opacity = '0.7';
});

trunk.addEventListener('mouseout', () => {
    trunk.style.opacity = '1';
});

trunk.addEventListener('click', () => {
    showInfo('El embargo tuvo efectos inmediatos como un aumento drástico en el precio del petróleo, que subió de 3 a 12 dólares por barril. Esta subida provocó una inflación global considerable, incrementando los costos de producción y reduciendo el empleo, ya que las empresas se vieron obligadas a recortar personal para ajustar sus costos. La crisis económica resultante hizo insostenible mantener el Estado de Bienestar debido a los altos costos asociados. Los gobiernos tuvieron que reducir el gasto social y los programas de bienestar debido a la presión económica, lo que debilitó el enfoque keynesiano basado en la intervención estatal y el gasto público para estimular la economía y mantener el pleno empleo. El fracaso del keynesianismo para gestionar la crisis económica derivada del aumento del precio del petróleo llevó a una transición hacia el monetarismo. La necesidad de controlar la inflación y estabilizar las economías afectadas impulsó la adopción de políticas monetaristas, que promovían una menor intervención estatal y un control estricto de la oferta monetaria.\n\nEl toyotismo, un sistema de organización productiva desarrollado por Toyota en la década de 1950, se basa en la producción a partir de pedidos específicos. Los insumos y la producción se planifican para entregar productos terminados según la demanda y en tiempos definidos. Este método elimina mercaderías y capital inmovilizado, optimizando la eficiencia y reduciendo costos. Además, fomenta la polivalencia de los trabajadores, quienes realizan diversas tareas como diagnóstico, producción, reparación, mantenimiento y control de calidad, permitiendo una rápida adaptación a cambios y nuevas tecnologías.');
});

roots.addEventListener('mouseover', () => {
    roots.style.opacity = '0.7';
});

roots.addEventListener('mouseout', () => {
    roots.style.opacity = '1';
});

roots.addEventListener('click', () => {
    showInfo('La crisis también marcó el declive del Estado de Bienestar y un cambio en las políticas económicas globales. Antes de la crisis, predominaba el keynesianismo, una teoría económica que promovía la intervención estatal en la economía para evitar crisis y fomentar el bienestar social. Sin embargo, el impacto de la crisis del petróleo condujo a un cambio hacia el monetarismo, una teoría defendida por Milton Friedman, que se enfocaba en controlar la inflación mediante la regulación de la oferta monetaria y reduciendo la intervención estatal.');
});

function showInfo(text) {
    infoText.textContent = text;
    tree.classList.add('hidden');
    info.classList.remove('hidden');
    backButton.classList.remove('hidden');
}





