const TeamList = () => {
  const members = [
    { name: 'Alexandra Deff', task: 'Github Project Repository', status: 'Completed', color: 'bg-green-100 text-green-600' },
    { name: 'Edwin Adenike', task: 'Integrate User Auth', status: 'In Progress', color: 'bg-orange-100 text-orange-600' },
    { name: 'Isaac Oluwatemilorun', task: 'Search and Filter', status: 'Pending', color: 'bg-red-100 text-red-600' },
  ];

  return (
    <div className="bg-white p-6 rounded-[2rem] border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold">Team Collaboration</h3>
        <button className="text-xs font-bold border border-gray-200 px-3 py-1.5 rounded-xl hover:bg-gray-50">+ Add Member</button>
      </div>
      <div className="space-y-4">
        {members.map((m, i) => (
          <div key={i} className="flex items-center justify-between group cursor-pointer hover:bg-gray-50 p-2 rounded-2xl transition-colors">
            <div className="flex items-center gap-3">
              <img src={`https://i.pravatar.cc/150?u=${i}`} className="w-10 h-10 rounded-full" alt="" />
              <div>
                <p className="text-sm font-bold text-gray-900">{m.name}</p>
                <p className="text-xs text-gray-400">Working on <span className="text-gray-600 font-medium">{m.task}</span></p>
              </div>
            </div>
            <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${m.color}`}>{m.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamList;