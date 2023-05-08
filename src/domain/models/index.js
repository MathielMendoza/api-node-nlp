const Models = {
    CandidatesModels: {
        Candidates: import('./candidates/candidate'),
    },
    EnterprisesModels: {
        Enterprises: import('./enterprises/enterprise'),
        EnterpriseUsers: import('./enterprises/enterpriseUsers'),
        EnterpriseServices: import('./enterprises/enterpriseServices'),
    },
    ReportsModels: {
        ReportsStructureTests: import('./enterprises/enterpriseStructureTests'),
        ReportsStructureCompetences: import('./enterprises/enterpriseStructureCompetences'),
    },
    UsersModels: {
        User: import('./users/user'),
    }
}

export default Models;