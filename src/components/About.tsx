const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              About / À propos de Gloria Rosado
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          </div>

          <div className="space-y-8 text-lg leading-relaxed">
            <div className="bg-card p-8 rounded-xl shadow-md border border-border">
              <p className="text-foreground mb-6">
                I'm Gloria Rosado, a proud Canadian mother and long-time Westmount resident. Originally from Campeche, Mexico, I made Montréal my home more than fifteen years ago. Here, I've raised my son, built friendships, and found purpose in helping new voices be heard and included in our city's life.
              </p>
              <p className="text-muted-foreground italic">
                Je suis Gloria Rosado, une mère canadienne fière et résidente de Westmount depuis de nombreuses années. Originaire de Campeche, au Mexique, j'ai fait de Montréal mon chez-moi il y a plus de quinze ans. C'est ici que j'ai élevé mon fils, tissé des liens et trouvé ma vocation : aider de nouvelles voix à participer pleinement à la vie de notre communauté.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-md border border-border">
              <p className="text-foreground mb-6">
                Before coming to Canada, I served as Director of Tourism for the State of Campeche and National Technical Secretary of Mexico's Association of World Heritage Cities, working closely with UNESCO on heritage preservation. In 2009, I joined the Mission of Mexico to the International Civil Aviation Organization (ICAO) in Montréal, serving as liaison with the Federal Secretariat of Communications and Transport.
              </p>
              <p className="text-muted-foreground italic">
                Avant de venir au Canada, j'ai été directrice du tourisme de l'État de Campeche et secrétaire technique nationale de l'Association mexicaine des villes du patrimoine mondial, collaborant avec l'UNESCO à la préservation du patrimoine urbain. En 2009, j'ai travaillé à la Mission du Mexique auprès de l'OACI à Montréal, comme agente de liaison avec le Secrétariat fédéral des communications et des transports.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-md border border-border">
              <p className="text-foreground mb-6">
                In Montréal, I serve as President of 50 + 1 Canada and Vice-President of Fusion Québec, organizations that empower women and newcomers through leadership, language, and civic engagement. I also produce the bilingual program <em>The First Women Who Broke the Glass Ceiling / Les Premières Femmes qui ont brisé le plafond de verre</em> and organize <em>La Force d'être Ensemble</em> during Latin American Heritage Month.
              </p>
              <p className="text-muted-foreground italic">
                À Montréal, je suis présidente de 50 + 1 Canada et vice-présidente de Fusion Québec, deux organisations qui soutiennent le leadership des femmes et l'intégration des nouveaux arrivants par la langue et la participation citoyenne. Je produis également l'émission bilingue <em>Les Premières Femmes qui ont brisé le plafond de verre</em> et j'organise <em>La Force d'être Ensemble</em> pendant le Mois du patrimoine latino-américain.
              </p>
            </div>

            <div className="bg-primary/10 border-l-4 border-primary p-8 rounded-r-xl">
              <p className="text-xl font-heading font-semibold text-foreground mb-4">
                "I know what it means to build bridges between people and ideas — and now I'm ready to do it for the community I call home."
              </p>
              <p className="text-xl font-heading font-semibold text-muted-foreground italic">
                « Je sais ce que signifie bâtir des ponts entre les gens et les idées — et je suis prête à le faire pour la communauté que j'appelle chez moi. »
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-md border border-border">
              <p className="text-foreground mb-6">
                My approach is simple: listen, act, and deliver visible results — for a Westmount that is safer, cleaner, greener, and more united. This city is where my son is growing up, where I've built my life, and where I want to continue building bridges between people and ideas — together.
              </p>
              <p className="text-muted-foreground italic">
                Mon approche est simple : écouter, agir et obtenir des résultats visibles — pour un Westmount plus sûr, plus propre, plus vert et plus uni. C'est ici que mon fils grandit, que j'ai bâti ma vie, et que je veux continuer à créer des ponts entre les personnes et les idées — ensemble.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
