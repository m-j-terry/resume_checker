# Resume Checker

Did you know that Applicant Tracking Systems (ATS) check your resume for hard-skill buzz words and that by tailoring your resume to reflect your expertise in these skills—literally by making sure to include them directly—you can increase your application's visibility? This application checks job descriptions for the buzz words that may be missing from your resume so that you can improve your resume for that application! 

## Try it [here](https://ats-resume-checker.mjterry.me/)!

- The application is simple. Copy and paste both the job description and your resume into the input fields.
- Under the hood, the application takes each of these strings and through a series of steps converts everything to lowercase, removes all punctuation, and turns them each into arrays of words. Then the job description is checked for buzz words—any buzz words are then stored in an array. Then the resume is checked against these words and any missing words (i.e. important ATS words that are in the description but not the resume) are added to another array. A simple calculus reveals what percent of the total buzzwords your resume included, and then the application returns the percentage and any of the words that were missing from your resume!

- Because this application removes all punctuation, in instances where a buzz word may have a period there may be discrepancies in what the actual buzz words in the description or in your resume are. For instance, if the resume checker says that nodejs is a buzz word, it is possible that the buzzword actually is actually Node.js; be sure to double check that you are matching the punctuation/syntax of the original job listing so that you can be as accurate to the original listing as possible!

- Here are the buzz words in the current version of the application:
- const buzzWords = ['react', 'reactjs', 'node', 'nodejs', 'html', 'html5', 'css', 'css3', 'javascript', 'js', 'responsive', 'vue', 'vuejs', 'next', 'nextjs', 'angular', 'angularjs', 'backbone', 'backbonejs', 'front', 'back', 'frontend', 'backend', 'fullstack', 'full', 'mern', 'mernstack', 'ai', 'python', 'typescript', 'ts', 'py', 'restful', 'api', 'webpack', 'java', 'vite', 'loadtesting', 'load', 'testing', 'test', 'tests', 'objectoriented', 'object', 'oriented', 'programming', 'objectorientedprogramming', 'oop', 'mongoose', 'mongodb', 'express', 'sql', 'mysql', 'postgres', 'postgresql', 'django', 'docker', 'ruby', 'rubyonrails', 'golang', 'C', 'C++', 'devops', 'linux', 'perl', 'php'] 

- This is only version 1.0 of the application; clearly this is hardly an exhaustive list! If you have any suggestions for additions, please reach out. I am trying to make this application as in depth and helpful as possible!

- This project utilizes [Arthur Bernier JR.'s React Starter Kit](https://www.npmjs.com/package/big-poppa-code-react-starter-kit?activeTab=code). Arthur is the goat!

# Who Am I?
Michael Terry (he/him)
- I am a former Middle School English teacher who recently completed General Assembly's SEI Coding Bootcamp and is searching for new opportunities in tech.

Let's connect!
- [LinkedIn](https://portfolio-mjterry.netlify.app/)
- [GitHub](https://github.com/m-j-terry)
- [Portfolio](https://www.linkedin.com/in/michaeljterry/) 

