# Resume Checker

Did you know that Applicant Tracking Systems (ATS) check your resume for hard-skill buzz words and that by tailoring your resume to reflect your expertise in these skills—literally by making sure to include them directly—you can increase your application's visibility? This application checks job descriptions for the buzz words that may be missing from your resume so that you can improve your resume for that application! 

## Try it [here](https://ats-resume-checker.mjterry.me/)!

- The application is simple. Copy and paste both the job description and your resume into the input fields.
- Under the hood, the application takes each of these strings and through a series of steps converts everything to lowercase, removes all punctuation, and turns them each into arrays of words. Then the job description is checked for buzz words—any buzz words are then stored in an array. Then the resume is checked against these words and any missing words (i.e. important ATS words that are in the description but not the resume) are added to another array. A simple calculus reveals what percent of the total buzzwords your resume included, and then the application returns the percentage and any of the words that were missing from your resume!

- Because the previous version of this application removed all punctuation, in instances where a buzz word may have a period there may have been more discrepancy between what the actual buzz words in the description or in your resume are. For instance, if the resume checker says that nodejs is a buzz word, it is possible that the buzzword actually is actually Node.js.

- In my most recent push, I updated the resume-checker with new logic to handle periods at the end of a sentence or line versus periods in the middle of a phrase like Node.js; however, to account for discrepancies in the use of uppercase spellings, I have still allotted for the function to check all strings in lowercase in order to more accurately reflect what is truly missing. 

- Regardless, be sure to use your results to double check that you are matching the punctuation/syntax of the original job listing so that you can be as accurate to the original listing as possible!

- Here are the buzz words in the current version of the application:
- const buzzWords = ['react', 'reactjs', 'react.js', 'node', 'node.js', 'nodejs', 'html', 'html5', 'css', 'css3', 'scss', 'sass', 'tailwind', 'gulp', 'wordpress', 'javascript', 'js', 'responsive', 'vue', 'vuejs', 'vue.js', 'next', 'nextjs', 'next.js', 'angular', 'angularjs', 'angular.js', 'backbone', 'backbonejs', 'backbone.js', 'front', 'back', 'end', 'front-end', 'back-end', 'frontend', 'backend', 'fullstack', 'full', 'stack', 'mern', 'mernstack', 'ai', 'python', 'typescript', 'ts', 'py', 'restful', 'rest', 'restapi', 'api', 'webpack', 'java', 'vite', 'loadtesting', 'load', 'testing', 'test', 'tests', 'objectoriented', 'object-oriented', 'object', 'oriented', 'programming', 'objectorientedprogramming', 'object-oriented-programming', "oop", 'mongoose', 'mongodb', 'express', 'sql', 'mysql', 'postgres', 'postgresql', 'django', 'docker', 'ruby', 'rubyonrails', 'golang', 'C', 'C++', 'devops', 'bit', 'bitbucket', 'pyspark', 'hadoop', 'artifactory', 'jenkins', 'linux', 'perl', 'php', 'sybase', 'snowflake', 'etl', 'alloy', 'ios', 'git', 'flask', 'gsap', 'pixijs', 'pixi.js', 'aws', 's3', 'lambda']

- The list has increased by a factor of nearly 2 since the first push!

- This is only version 1.1 of the application; clearly this is hardly an exhaustive list! If you have any suggestions for additions, please reach out. I am trying to make this application as in depth and helpful as possible!

- This project utilizes [Arthur Bernier JR.'s React Starter Kit](https://www.npmjs.com/package/big-poppa-code-react-starter-kit?activeTab=code). Arthur is the goat!

# Who Am I?
Michael Terry (he/him)
- I am a former Middle School English teacher who recently completed General Assembly's SEI Coding Bootcamp and is searching for new opportunities in tech.

Let's connect!
- [LinkedIn](https://portfolio-mjterry.netlify.app/)
- [GitHub](https://github.com/m-j-terry)
- [Portfolio](https://www.linkedin.com/in/michaeljterry/) 

