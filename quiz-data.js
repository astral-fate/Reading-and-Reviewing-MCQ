const fillInTheBlank = [
    {
        question: "The _______ evaluation measure in research considers yearly average number of citations to recent articles.",
        options: ["H-index", "Impact Factor", "Citation Count", "Journal Rank"],
        answer: "Impact Factor"
    },
    {
        question: "A researcher with an _______ of h has h papers with at least h citations.",
        options: ["Impact Factor", "H-index", "Citation Score", "Publication Index"],
        answer: "H-index"
    },
    {
        question: "The _______ operator in literature databases retrieves records where ALL search terms are present.",
        options: ["OR", "NOT", "AND", "LIKE"],
        answer: "AND"
    },
    {
        question: "_______ are considered the most prestigious publishing option in research.",
        options: ["Conference Papers", "Journals", "Book Chapters", "Technical Reports"],
        answer: "Journals"
    },
    {
        question: "A good journal typically has an Impact Factor greater than _______.",
        options: ["0.5", "1", "2", "3"],
        answer: "1"
    },
    {
        question: "_______ research does not necessarily need to compare with previous work.",
        options: ["Theoretical", "Empirical", "Exploratory", "Comparative"],
        answer: "Exploratory"
    },
    {
        question: "The brute-force solution for the Traveling Salesman Problem has _______ complexity.",
        options: ["O(n)", "O(n^2)", "O(n!)", "O(2^n)"],
        answer: "O(n!)"
    },
    {
        question: "_______ search is used when looking for exactly one record.",
        options: ["Wide", "Narrow", "Broad", "General"],
        answer: "Narrow"
    },
    {
        question: "Research must be systematic, logical, _______, and replicable.",
        options: ["theoretical", "empirical", "analytical", "practical"],
        answer: "empirical"
    },
    {
        question: "The _______ covers 14,000 journals and proceedings series.",
        options: ["Web of Science", "IEEE Xplore", "Scopus", "ACM Digital Library"],
        answer: "Scopus"
    },
    {
        question: "_______ reports usually contain detailed descriptions of methods and experiments.",
        options: ["Conference", "Journal", "Technical", "Research"],
        answer: "Technical"
    },
    {
        question: "Book chapters typically focus on presenting subjects in a _______ way.",
        options: ["technical", "theoretical", "didactic", "empirical"],
        answer: "didactic"
    },
    {
        question: "The P vs. NP problem is one of the most relevant _______ problems in computer science.",
        options: ["solved", "theoretical", "open", "closed"],
        answer: "open"
    },
    {
        question: "Extended abstracts help disseminate and discuss _______ results.",
        options: ["final", "initial", "theoretical", "comprehensive"],
        answer: "initial"
    },
    {
        question: "Computer Science Research can be theoretical, _______, or exploratory.",
        options: ["practical", "empirical", "analytical", "technical"],
        answer: "empirical"
    },
    {
        question: "The frontiers of knowledge are documented in journals and papers, not in _______.",
        options: ["research", "textbooks", "databases", "reports"],
        answer: "textbooks"
    },
    {
        question: "'Something Better' research requires better results in _______ tests.",
        options: ["random", "standard", "simple", "complex"],
        answer: "standard"
    },
    {
        question: "Deep learning approaches now require more _______ than before.",
        options: ["data", "computation", "rigor", "simplicity"],
        answer: "rigor"
    },
    {
        question: "The _______ database covers 22,000 journals and 192,000 proceedings.",
        options: ["Scopus", "IEEE Xplore", "ACM Digital Library", "Web of Knowledge"],
        answer: "Web of Knowledge"
    },
    {
        question: "Conference papers can expose researchers to different ideas and _______.",
        options: ["funding", "methods", "criticism", "publications"],
        answer: "criticism"
    },
    {
        question: "Literature databases collect _______ information from publishers.",
        options: ["basic", "bibliographic", "statistical", "historical"],
        answer: "bibliographic"
    },
    {
        question: "The Impact Factor is computed relative to the previous _______ years.",
        options: ["two", "three", "four", "five"],
        answer: "two"
    },
    {
        question: "A _______ search uses alternative words and phrases.",
        options: ["narrow", "wide", "specific", "exact"],
        answer: "wide"
    },
    {
        question: "The abstract of a research paper should not exceed _______ words.",
        options: ["100-150", "200-250", "300-350", "400-450"],
        answer: "100-150"
    },
    {
        question: "_______ research requires a good theoretical background.",
        options: ["Empirical", "Exploratory", "Theoretical", "Practical"],
        answer: "Theoretical"
    },
    {
        question: "A research paper's title should be as _______ as possible.",
        options: ["long", "short", "detailed", "complex"],
        answer: "short"
    },
    {
        question: "The _______ section gives credit to previous work.",
        options: ["Introduction", "Methods", "Related Work", "Conclusion"],
        answer: "Related Work"
    },
    {
        question: "Research contribution should demonstrate _______ and validity.",
        options: ["complexity", "originality", "length", "structure"],
        answer: "originality"
    },
    {
        question: "The _______ operator retrieves records NOT containing a particular term.",
        options: ["AND", "OR", "NOT", "ALL"],
        answer: "NOT"
    },
    {
        question: "Modern computer science was born with theoretical research in the decades of _______.",
        options: ["1910-1920", "1920-1930", "1930-1940", "1940-1950"],
        answer: "1930-1940"
    }
];

const trueOrFalse = [
    {
        question: "Library catalogues allow searching for specific journal articles.",
        answer: false
    },
    {
        question: "Web search engines can search within the full text of journal articles.",
        answer: true
    },
    {
        question: "The Impact Factor is computed only for the previous year.",
        answer: false
    },
    {
        question: "Book chapters typically contain original research results.",
        answer: false
    },
    {
        question: "Technical reports can serve as writing exercises.",
        answer: true
    },
    {
        question: "Literature databases cover all existing journals and conferences.",
        answer: false
    },
    {
        question: "Conference papers typically result in faster publication than journals.",
        answer: true
    },
    {
        question: "The H-index can only be used to evaluate individual researchers.",
        answer: false
    },
    {
        question: "All implementation projects are automatically considered research.",
        answer: false
    },
    {
        question: "Exploratory research must always compare with previous work.",
        answer: false
    },
    {
        question: "The Impact Factor is the same across all research areas.",
        answer: false
    },
    {
        question: "Extended abstracts typically have high impact due to wide readership.",
        answer: false
    },
    {
        question: "Journal papers always have more impact than conference papers.",
        answer: false
    },
    {
        question: "It is acceptable to start research with books and surveys.",
        answer: true
    },
    {
        question: "Deep learning approaches require less rigor now than in the past.",
        answer: false
    },
    {
        question: "Technical reports only contain final results.",
        answer: false
    },
    {
        question: "Using wildcards can help in wide searches.",
        answer: true
    },
    {
        question: "Web search engines automatically distinguish high-quality from low-quality material.",
        answer: false
    },
    {
        question: "The research process should stop once the literature review is complete.",
        answer: false
    },
    {
        question: "Authors must approve the final version of a paper to be listed as authors.",
        answer: true
    },
    {
        question: "The abstract should contain extensive references to other work.",
        answer: false
    },
    {
        question: "Pure theory papers often use alphabetical order for authors.",
        answer: true
    },
    {
        question: "The introduction should repeat the content of the abstract.",
        answer: false
    },
    {
        question: "Related work can only be placed at the end of a paper.",
        answer: false
    },
    {
        question: "The summary section should introduce new research directions.",
        answer: false
    },
    {
        question: "Theoretical research always requires experimental validation.",
        answer: false
    },
    {
        question: "Something Different research must always prove better results.",
        answer: false
    },
    {
        question: "Literature databases cover all types of scientific publications.",
        answer: false
    },
    {
        question: "The research process must include extensive reading throughout.",
        answer: true
    },
    {
        question: "Conference presentations always result in valuable feedback.",
        answer: false
    }
];

const multipleChoice = [
    {
        question: "Which database covers 14,000 journals and proceedings series?",
        options: ["ACM Digital Library", "IEEE Xplore", "Scopus", "Web of Science"],
        answer: "Scopus"
    },
    {
        question: "What is the main purpose of technical reports?",
        options: ["Final results", "Initial methods", "Detailed descriptions", "Quick summaries"],
        answer: "Detailed descriptions"
    },
    {
        question: "Which is NOT a type of Computer Science Research?",
        options: ["Theoretical", "Empirical", "Exploratory", "Recreational"],
        answer: "Recreational"
    },
    {
        question: "What best characterizes 'Something Different' research?",
        options: ["Better results", "Novel approach", "Complete solution", "Perfect implementation"],
        answer: "Novel approach"
    },
    {
        question: "Which search type is used when looking for exactly one record?",
        options: ["Wide", "Narrow", "Broad", "General"],
        answer: "Narrow"
    },
    {
        question: "What metric evaluates researchers based on their most cited papers?",
        options: ["Impact Factor", "H-index", "Citation count", "Publication count"],
        answer: "H-index"
    },
    {
        question: "Which is the primary purpose of extended abstracts?",
        options: ["Final results", "Initial results", "Complete study", "Long-term impact"],
        answer: "Initial results"
    },
    {
        question: "What is NOT a valid boolean operator?",
        options: ["AND", "OR", "NOT", "MAYBE"],
        answer: "MAYBE"
    },
    {
        question: "What is the minimum Impact Factor for a good journal?",
        options: ["0.5", "1", "1.5", "2"],
        answer: "1"
    },
    {
        question: "Which publication type typically has the lowest impact?",
        options: ["Journal paper", "Conference paper", "Extended abstract", "Book chapter"],
        answer: "Extended abstract"
    },
    {
        question: "What is NOT typically included in literature databases?",
        options: ["Journal articles", "Conference papers", "Technical reports", "Textbooks"],
        answer: "Textbooks"
    },
    {
        question: "Which is NOT a research level in Computer Science?",
        options: ["Product or Implementation", "Something Different", "Something Better", "Something Perfect"],
        answer: "Something Perfect"
    },
    {
        question: "What type of paper focuses on presenting subjects didactically?",
        options: ["Journal paper", "Conference paper", "Book chapter", "Technical report"],
        answer: "Book chapter"
    },
    {
        question: "Which is NOT a benefit of conference papers?",
        options: ["Fast publication", "Feedback", "Different ideas", "Permanent storage"],
        answer: "Permanent storage"
    },
    {
        question: "What characterizes good research?",
        options: ["Random", "Systematic", "Unreplicable", "Subjective"],
        answer: "Systematic"
    },
    {
        question: "Which database has the most comprehensive academic content?",
        options: ["ACM Digital Library", "IEEE Xplore", "Scopus", "Web of Knowledge"],
        answer: "Web of Knowledge"
    },
    {
        question: "What is the main purpose of the abstract?",
        options: ["Detailed methods", "Motivate reading", "List references", "Describe experiments"],
        answer: "Motivate reading"
    },
    {
        question: "Which section typically appears last in a research paper?",
        options: ["Methods", "Results", "Future Work", "Related Work"],
        answer: "Future Work"
    },
    {
        question: "What is the primary purpose of acknowledgments?",
        options: ["List authors", "Thank funding", "Cite references", "Describe methods"],
        answer: "Thank funding"
    },
    {
        question: "Which search engine specifically targets scholarly literature?",
        options: ["Google", "Bing", "Google Scholar", "Yahoo"],
        answer: "Google Scholar"
    },
    {
        question: "What type of research requires the least comparison with previous work?",
        options: ["Theoretical", "Empirical", "Exploratory", "Comparative"],
        answer: "Exploratory"
    },
    {
        question: "Which is NOT a measure of good research?",
        options: ["Systematic", "Logical", "Empirical", "Random"],
        answer: "Random"
    },
    {
        question: "What is typically NOT included in author contact information?",
        options: ["Email", "Affiliation", "Phone number", "Institution"],
        answer: "Phone number"
    },
    {
        question: "Which section establishes the originality of current work?",
        options: ["Introduction", "Methods", "Related Work", "Results"],
        answer: "Related Work"
    },
    {
        question: "What is the main purpose of the introduction?",
        options: ["List methods", "State problem", "Show results", "Thank contributors"],
        answer: "State problem"
    },
    {
        question: "Which type of search uses alternative spellings?",
        options: ["Narrow", "Wide", "Exact", "Specific"],
        answer: "Wide"
    },
    {
        question: "What is most important in 'Something Better' research?",
        options: ["Novel approach", "Different method", "Better results", "Unique implementation"],
        answer: "Better results"
    },
    {
        question: "What characterizes theoretical research?",
        options: ["Implementation focus", "Experimental data", "Mathematical proofs", "User testing"],
        answer: "Mathematical proofs"
    },
    {
        question: "Which is most important for 'Something Different' research?",
        options: ["Better results", "Novel approach", "Complete testing", "Perfect implementation"],
        answer: "Novel approach"
    },
    {
        question: "What is the primary focus of book chapters?",
        options: ["Original research", "Teaching content", "Data analysis", "Method comparison"],
        answer: "Teaching content"
    }
];
