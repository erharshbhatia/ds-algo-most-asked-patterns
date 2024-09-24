class Emp {
    constructor(id, name, mid) {
      this.id = id;
      this.name = name;
      this.mid = mid; // Manager ID
    }
  }
  
  function printOrgChart(managerId, orgMap, level) {
    if (!orgMap.has(managerId)) return;
  
    for (const emp of orgMap.get(managerId)) {
      console.log(' '.repeat(level * 4) + emp.name);
      printOrgChart(emp.id, orgMap, level + 1);
    }
  }
  
  function buildOrgChart(employees) {
    const orgMap = new Map();
  
    // Build the organization map
    for (const emp of employees) {
      if (!orgMap.has(emp.mid)) {
        orgMap.set(emp.mid, []);
      }
      orgMap.get(emp.mid).push(emp);
    }
  
    // Assuming that the employee with manager ID NULL (0 in this case) is the root
    printOrgChart(0, orgMap, 0);
  }
  
  const employees = [
    new Emp(1, "Eric", 0),
    new Emp(2, "Jack", 1),
    new Emp(3, "Viral", 3),
    new Emp(4, "Micheal", 2),
    new Emp(5, "Nitesh", 1),
    new Emp(6, "George", 4),
    new Emp(7, "Ryan", 2),
    // Additional employees can be added here...
  ];
  
  buildOrgChart(employees);
  