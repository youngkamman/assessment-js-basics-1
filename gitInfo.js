/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition ="Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development"
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = "GitHub is an open source, cloud-based repository hosting service that allows developers to store, manage, track, and control changes to their code. Source code projects are hosted in a variety of programming languages, and changes made to every iteration are tracked. GitHub users can review each other’s code and propose changes."
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
let gitInitDefinition = "git init command creates a new Git repository"
//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
let gitCloneDefinition = "git clone is a git command, which creates a clone/copy of an existing repository into a new directory."
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
let gitStatusDefinition = "The git status command shows the state of the working directory and the staging area. It allows you to see staged changes and the files that aren’t being tracked by Git. The Status output does not display any information about the committed project history. For this purpose, use the git log command. The git status simply displays what has been going on with git add and git commit commands."
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
let gitAddDefinition = "The git add is a command, which adds changes in the working directory to the staging area. With the help of this command, you tell Git that you want to add updates to a certain file in the next commit. But in order to record changes, you need to run git commit too. In combination with the commands mentioned above, git status command is also needed to see which state the working directory and the staging area are in"
let gitAddCode = "git add ."
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
let gitCommitDefinition = "The git commit command saves all currently staged changes of the project. Commits are created to capture the current state of a project. Committed snapshots are considered safe versions of a project because Git asks before changing them. Before running git commit command, git add command is used to promote changes to the project that will be then stored in a commit."
let gitCommitCode = "git commit -m initial commit" 


//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
let gitPushDefinition = "The git push command is used to upload local repository content to a remote repository. Pushing is how you transfer commits from your local repository to a remote repo. It's the counterpart to git fetch, but whereas fetching imports commits to local branches, pushing exports commits to remote branches. Remote branches are configured using the git remote command. Pushing has the potential to overwrite changes, caution should be taken when pushing. These issues are discussed below."